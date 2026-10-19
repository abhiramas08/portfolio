import type { BlogPost, BlogNeighbours } from "../types"

/**
 * ==============================================================================
 * ABHIRAM A S — BLOG REGISTRY
 * ==============================================================================
 *
 * HOW TO ADD A NEW ARTICLE:
 * ------------------------------------------------------------------------------
 * 1. Add an object to the `ARTICLES` array below.
 * 2. Set `published: true` to make it visible on `/blog` and `/blog/[slug]`.
 * 3. Write your content in standard Markdown (supports headings, code blocks with
 *    syntax highlighting, blockquotes, lists, links, and bold/italics).
 *
 * Current state: Empty (`ARTICLES = []`) as no published articles have been
 * supplied yet. Visiting `/blog` cleanly displays the empty blog state.
 * ==============================================================================
 */

export const SAMPLE_DRAFT_POST: BlogPost = {
  slug: "medicine-expiry-detection-pipeline",
  title: "Building an Embedded Medicine Expiry Detection Pipeline with ESP32-CAM and OpenCV",
  description:
    "A walkthrough of combining microcontroller image capture, OpenCV adaptive thresholding, and Tesseract OCR to parse pharmaceutical dates under variable lighting.",
  date: "2025-03-15",
  readingTime: "5 min read",
  tags: ["Computer Vision", "ESP32-CAM", "OpenCV", "Python", "Embedded"],
  published: false, // Set to true to publish this article
  author: {
    name: "Abhiram A S",
    handle: "@abhiramas08",
  },
  content: `## Overview

Automated expiration date verification on pharmaceutical packaging presents unique physical constraints: specular reflection from foil blister packs, non-standard date formats (e.g., \`EXP 12/26\`, \`08/2027\`, \`BEST BEFORE 11-25\`), and varying ambient illumination.

In this project, we built a hybrid embedded capture and computer vision pipeline using an **ESP32-CAM**, an **Arduino microcontroller**, and a Python-based processing pipeline powered by **OpenCV** and **Tesseract OCR**.

### Hardware Architecture

The capture rig uses an ESP32-CAM module interfaced over Wi-Fi/serial to the host computer:

- **Camera Module**: OV2640 with UXGA resolution support (configured for 800x600 SVGA for optimal OCR latency).
- **Controller**: Arduino UNO controlling an LED diffuser array to eliminate hot spots on metallic foil packaging.
- **Lighting**: Ring-diffused white LED array with PWM duty-cycle control.

\`\`\`python
import cv2
import pytesseract
import re

def preprocess_medicine_foil(image_path: str):
    # Load captured frame from ESP32-CAM stream
    img = cv2.imread(image_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Adaptive histogram equalization to neutralize glare
    clahe = cv2.createCLAHE(clipLimit=2.0, tileGridSize=(8, 8))
    enhanced = clahe.apply(gray)

    # Bilateral filtering preserves packaging text edges while smoothing grain
    filtered = cv2.bilateralFilter(enhanced, d=9, sigmaColor=75, sigmaSpace=75)

    # Otsu adaptive thresholding
    _, thresh = cv2.threshold(filtered, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
    return thresh
\`\`\`

### OCR Text Extraction & Date Parsing

Once the region of interest is preprocessed, Tesseract is invoked with page segmentation mode tuned for sparse single-block text (\`--psm 6\`):

\`\`\`python
def extract_expiry_date(processed_image):
    custom_config = r"--oem 3 --psm 6 -c tessedit_char_whitelist=0123456789/.-EXPBESTFORE"
    raw_text = pytesseract.image_to_string(processed_image, config=custom_config)

    # Regex patterns for common pharmaceutical date formats
    patterns = [
        r"(?:EXP|BB|EXPIRY)[\s.:]*([0-9]{2}[/-][0-9]{2,4})",
        r"([0-9]{2}/[0-9]{4})",
        r"([0-9]{2}-[0-9]{2}-[0-9]{4})"
    ]

    for pattern in patterns:
        match = re.search(pattern, raw_text, re.IGNORECASE)
        if match:
            return match.group(1)

    return None
\`\`\`

> [!NOTE]
> Foil blister packs frequently have stamped/embossed characters without ink. For embossed text, side-angle grazing illumination is critical to cast contrast shadows into the indentations.

### Key Learnings & Future Work

- **Illumination is 80% of Vision Success**: Even advanced OCR algorithms fail if specular reflections blowout character contrast.
- **Next Steps**: Porting the parsing layer to run inference directly on microcontrollers using TensorFlow Lite for Microcontrollers (TFLM) to eliminate the host PC dependency.
`,
}

// Active articles list. Currently empty per requirements (empty blog state).
export const ARTICLES: BlogPost[] = [
  // When ready to publish an article, add it here or set SAMPLE_DRAFT_POST.published = true:
  // SAMPLE_DRAFT_POST,
]

export function getAllBlogPosts(): BlogPost[] {
  return ARTICLES.filter((post) => post.published)
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  // Check active published articles first
  const published = ARTICLES.find(
    (post) => post.slug === slug && post.published
  )
  if (published) return published

  // Also allow previewing the sample draft if matching slug and explicitly published
  if (SAMPLE_DRAFT_POST.slug === slug && SAMPLE_DRAFT_POST.published) {
    return SAMPLE_DRAFT_POST
  }

  return undefined
}

export function findArticleNeighbours(slug: string): BlogNeighbours {
  const published = getAllBlogPosts()
  const index = published.findIndex((p) => p.slug === slug)

  if (index === -1) {
    return { previous: null, next: null }
  }

  return {
    previous: index > 0 ? published[index - 1] : null,
    next: index < published.length - 1 ? published[index + 1] : null,
  }
}

export function getAllTags(): string[] {
  const posts = getAllBlogPosts()
  const tagsSet = new Set<string>()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagsSet.add(tag))
  })
  return Array.from(tagsSet).sort()
}
