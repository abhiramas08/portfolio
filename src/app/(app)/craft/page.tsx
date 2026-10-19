"use client"

import * as React from "react"
import {
  Cpu,
  ExternalLink,
  GitBranch,
  Sliders,
} from "lucide-react"

import {
  PageHeading,
  PageHeadingDescription,
  PageHeadingTagline,
  PageHeadingTitle,
} from "@/components/page-heading"
import { Badge } from "@/components/ui/badge"
import { Tag } from "@/components/ui/tag"
import { Button } from "@/components/ui/button"

interface CraftProject {
  id: string
  figureNumber: string
  title: string
  category: "Computer Vision & IoT" | "Robotics & Firmware" | "Browser Extension"
  status: "In Active Development" | "Prototyped" | "Completed"
  date: string
  description: string
  hardware?: string[]
  software: string[]
  repositoryUrl?: string
  schematicType: "medicine-ocr" | "robotics-drone" | "browser-extension"
}

const CRAFTS: CraftProject[] = [
  {
    id: "medicine-expiry-ocr",
    figureNumber: "01",
    title: "Medicine Expiry Date Detection System",
    category: "Computer Vision & IoT",
    status: "In Active Development",
    date: "2025 — Present",
    description:
      "An embedded computer vision system engineered with an ESP32-CAM module, Arduino controller, and OpenCV pipeline. The device captures printed text on medicine strips, preprocesses the image using adaptive binarization, and extracts expiration date characters via Optical Character Recognition (OCR) algorithms.",
    hardware: ["ESP32-CAM Module", "Arduino Uno / Nano", "OV2640 Camera Sensor", "LED Illumination Ring", "FTDI Programmer"],
    software: ["OpenCV (Python)", "Tesseract OCR Engine", "C++ / Arduino IDE", "Flask / Local Server"],
    repositoryUrl: "https://github.com/abhiramas08",
    schematicType: "medicine-ocr",
  },
  {
    id: "drone-robotics-firmware",
    figureNumber: "02",
    title: "ACE College Drone & Robotics Workshop Platform",
    category: "Robotics & Firmware",
    status: "Completed",
    date: "Jun 2025",
    description:
      "Firmware architectures, ESC calibration scripts, and sensor telemetric controls developed during the Drone and Robotics Workshop held at ACE College of Engineering. Covers real-time PWM motor driving, gyro stabilization, and receiver signaling.",
    hardware: ["Flight Controller MCU", "Brushless DC Motors & ESCs", "MPU-6050 6-Axis IMU", "2.4GHz Radio Receiver", "LiPo Battery Monitor"],
    software: ["Embedded C / C++", "Arduino IDE", "Telemetry Protocol", "Motor PWM Calibration"],
    repositoryUrl: "https://github.com/abhiramas08/ace-college-drone-robotics-workshop",
    schematicType: "robotics-drone",
  },
  {
    id: "leads-tab-saver",
    figureNumber: "03",
    title: "Leads Tab Saver Browser Extension",
    category: "Browser Extension",
    status: "Completed",
    date: "2024",
    description:
      "A lightweight, focused browser extension utilizing the Chrome Tabs API to snapshot, label, and persist active URL sessions into HTML5 LocalStorage for instant retrieval and lead aggregation without tab bloat.",
    hardware: ["Client Workstation"],
    software: ["JavaScript (ES6+)", "Chrome Extensions API (Manifest v3)", "LocalStorage API", "HTML5 & CSS3"],
    repositoryUrl: "https://github.com/abhiramas08",
    schematicType: "browser-extension",
  },
]

export default function CraftPage() {
  return (
    <div className="space-y-10 pb-20">
      <PageHeading>
        <PageHeadingTagline>Craft & Systems</PageHeadingTagline>
        <PageHeadingTitle>Technical experiments & hardware showcase.</PageHeadingTitle>
        <PageHeadingDescription>
          Hardware prototypes, embedded vision pipelines, and system architectures built from genuine components.
          Designed for incremental documentation as new robotics and engineering experiments are conducted.
        </PageHeadingDescription>
      </PageHeading>

      <div className="mx-auto max-w-3xl space-y-12 px-4">
        <ul className="space-y-12">
          {CRAFTS.map((craft) => (
            <li
              key={craft.id}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-xs transition-colors hover:border-foreground/30"
            >
              {/* Technical Schematic Canvas */}
              <div className="relative border-b border-border bg-muted/30 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-semibold text-muted-foreground uppercase">
                      Fig. {craft.figureNumber} · Schematic
                    </span>
                    <Badge variant={craft.status === "In Active Development" ? "accent" : "secondary"}>
                      {craft.status}
                    </Badge>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{craft.category}</span>
                </div>

                {/* Vector Schematic Graphic */}
                <div className="overflow-hidden rounded-lg border border-border bg-background p-4 shadow-inner">
                  {craft.schematicType === "medicine-ocr" && <MedicineOcrSchematic />}
                  {craft.schematicType === "robotics-drone" && <DroneSchematic />}
                  {craft.schematicType === "browser-extension" && <ExtensionSchematic />}
                </div>
              </div>

              {/* Specification Details & Metadata */}
              <div className="space-y-4 p-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {craft.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    Period: {craft.date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {craft.description}
                </p>

                {/* Hardware Components List */}
                {craft.hardware && craft.hardware.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Cpu className="size-3.5" />
                      Hardware Integration
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {craft.hardware.map((hw) => (
                        <Tag key={hw} className="bg-muted/50 text-foreground font-mono">
                          {hw}
                        </Tag>
                      ))}
                    </div>
                  </div>
                )}

                {/* Software Stack List */}
                <div className="space-y-1.5 pt-1">
                  <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                    <Sliders className="size-3.5" />
                    Software & Frameworks
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {craft.software.map((sw) => (
                      <Tag key={sw} className="bg-zinc-100 dark:bg-zinc-800 text-foreground">
                        {sw}
                      </Tag>
                    ))}
                  </div>
                </div>

                {/* Repository Link Footer */}
                {craft.repositoryUrl && (
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      Verified Repository Available
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      nativeButton={false}
                      className="gap-1.5 font-mono text-xs"
                      render={
                        <a
                          href={craft.repositoryUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitBranch className="size-3.5" />
                          <span>View on GitHub</span>
                          <ExternalLink className="size-3" />
                        </a>
                      }
                    />
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function MedicineOcrSchematic() {
  return (
    <div className="flex flex-col items-center justify-center py-4 font-mono text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 w-full text-center">
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">1. Capture</div>
          <div className="text-[10px] text-muted-foreground mt-1">ESP32-CAM · OV2640</div>
        </div>
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">2. Filter</div>
          <div className="text-[10px] text-muted-foreground mt-1">OpenCV Grayscale · Otsu</div>
        </div>
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">3. OCR Parse</div>
          <div className="text-[10px] text-muted-foreground mt-1">Tesseract Segmentation</div>
        </div>
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">4. Alert</div>
          <div className="text-[10px] text-muted-foreground mt-1">Date Validation · Status</div>
        </div>
      </div>
    </div>
  )
}

function DroneSchematic() {
  return (
    <div className="flex flex-col items-center justify-center py-4 font-mono text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full text-center">
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">Radio Receiver (RX)</div>
          <div className="text-[10px] text-muted-foreground mt-1">2.4GHz Telemetry Channel</div>
        </div>
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">Flight Controller MCU</div>
          <div className="text-[10px] text-muted-foreground mt-1">MPU-6050 IMU · PID Loops</div>
        </div>
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">Motor Driver (ESC)</div>
          <div className="text-[10px] text-muted-foreground mt-1">Brushless PWM Throttles</div>
        </div>
      </div>
    </div>
  )
}

function ExtensionSchematic() {
  return (
    <div className="flex flex-col items-center justify-center py-4 font-mono text-xs">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full text-center">
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">Browser Active Tab</div>
          <div className="text-[10px] text-muted-foreground mt-1">chrome.tabs.query()</div>
        </div>
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">Storage Layer</div>
          <div className="text-[10px] text-muted-foreground mt-1">localStorage JSON array</div>
        </div>
        <div className="rounded border border-border bg-muted/40 p-3">
          <div className="font-medium text-foreground">Popup Interface</div>
          <div className="text-[10px] text-muted-foreground mt-1">Instant Restore & Delete</div>
        </div>
      </div>
    </div>
  )
}
