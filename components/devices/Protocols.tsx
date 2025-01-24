"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

interface Protocol {
  id: number;
  name: string;
  timeRange: string;
  steps: {
    step: number;
    way: number;
    treatments: {
      type: "CET" | "HI-TENS" | "RET";
      mode: "SOFT MEDIUM" | "DYN" | "CHRONIC";
      intensity: string;
      duration: string;
    }[];
  }[];
}

const protocols: Protocol[] = [
  {
    id: 1,
    name: "Protocole 1",
    timeRange: "09:21 / 09:41",
    steps: [
      {
        step: 1,
        way: 1,
        treatments: [
          {
            type: "CET",
            mode: "SOFT MEDIUM",
            intensity: "50%",
            duration: "10'"
          }
        ]
      },
      {
        step: 1,
        way: 2,
        treatments: [
          {
            type: "HI-TENS",
            mode: "DYN",
            intensity: "2%",
            duration: "10'"
          },
          {
            type: "RET",
            mode: "SOFT MEDIUM",
            intensity: "50%",
            duration: "10'"
          },
          {
            type: "HI-TENS",
            mode: "CHRONIC",
            intensity: "5%",
            duration: "10'"
          }
        ]
      },
      {
        step: 2,
        way: 1,
        treatments: [
          {
            type: "RET",
            mode: "SOFT MEDIUM",
            intensity: "60%",
            duration: "10'"
          },
          {
            type: "HI-TENS",
            mode: "CHRONIC",
            intensity: "2%",
            duration: "10'"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Protocole 2",
    timeRange: "10:02 / 10:17",
    steps: [
      {
        step: 1,
        way: 1,
        treatments: [
          {
            type: "CET",
            mode: "SOFT MEDIUM",
            intensity: "60%",
            duration: "15'"
          }
        ]
      },
      {
        step: 1,
        way: 2,
        treatments: [
          {
            type: "CET",
            mode: "SOFT MEDIUM",
            intensity: "60%",
            duration: "15'"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Protocole 3",
    timeRange: "10:22 / 10:27",
    steps: [
      {
        step: 1,
        way: 1,
        treatments: [
          {
            type: "CET",
            mode: "SOFT MEDIUM",
            intensity: "80%",
            duration: "5'"
          }
        ]
      },
      {
        step: 1,
        way: 2,
        treatments: [
          {
            type: "CET",
            mode: "SOFT MEDIUM",
            intensity: "80%",
            duration: "5'"
          }
        ]
      }
    ]
  }
];

const getBadgeColor = (type: string) => {
  switch (type) {
    case "CET":
      return "bg-[#F18841] text-white hover:bg-[#F18841]/90";
    case "HI-TENS":
      return "bg-[#00B2B2] text-white hover:bg-[#00B2B2]/90";
    case "RET":
      return "bg-[#4169E1] text-white hover:bg-[#4169E1]/90";
    default:
      return "bg-gray-500 text-white";
  }
};

export function Protocols() {
  return (
    <div className="space-y-6">
      {protocols.map((protocol) => (
        <Card key={protocol.id} className="p-6 bg-white text-gray-900">
          <div className="space-y-4">
            <h3 className="text-xl font-medium mb-4 text-gray-900">{protocol.name} - {protocol.timeRange}</h3>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 text-sm bg-gray-50">
                    <th className="p-3 text-left font-medium w-24 text-gray-900">Step</th>
                    <th className="p-3 text-left font-medium w-24 text-gray-900">Way</th>
                    <th className="p-3 text-left font-medium text-gray-900"></th>
                    <th className="p-3 text-left font-medium text-gray-900">Mode</th>
                    <th className="p-3 text-right font-medium w-20 text-gray-900">Intensité</th>
                    <th className="p-3 text-right font-medium w-20 text-gray-900">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  {protocol.steps.map((step, stepIndex) => (
                    step.treatments.map((treatment, treatmentIndex) => (
                      <tr 
                        key={`${stepIndex}-${treatmentIndex}`} 
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <td className="p-3">
                          {treatmentIndex === 0 && (
                            <div className="font-medium text-gray-900">
                              {step.step}
                            </div>
                          )}
                        </td>
                        <td className="p-3">
                          {treatmentIndex === 0 && (
                            <div className="font-medium text-gray-900">
                              {step.way}
                            </div>
                          )}
                        </td>
                        <td className="p-3">
                          <Badge className={`${getBadgeColor(treatment.type)} px-3`}>
                            {treatment.type}
                          </Badge>
                        </td>
                        <td className="p-3 text-gray-600">{treatment.mode}</td>
                        <td className="p-3 text-right text-gray-900">{treatment.intensity}</td>
                        <td className="p-3 text-right text-gray-900">{treatment.duration}</td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
