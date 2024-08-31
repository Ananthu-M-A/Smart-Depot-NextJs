import { ProductInterface } from "@/interfaces/ProductInterface"
import product1 from "../../public/product1.jpg"

export const productsList: ProductInterface[] = [
    {
        productName: "Hot Air Gun",
        brand: "Quick",
        image: product1,
        price: 6000,
        warranty: 6,
        description: "A high-performance hot air gun ideal for soldering, desoldering, and heat shrinking tasks.",
        features: ["Adjustable temperature control", "Digital display", "Ergonomic design"],
        specifications: {
            power: "1000W",
            temperatureRange: "100°C - 500°C",
            airFlow: "120 L/min",
            weight: "1.2 kg"
        }
    },
    {
        productName: "Soldering Station",
        brand: "Weller",
        image: product1,
        price: 4500,
        warranty: 12,
        description: "Professional-grade soldering station with precise temperature control for reliable soldering.",
        features: ["High-precision temperature adjustment", "Fast heat-up time", "ESD safe"],
        specifications: {
            power: "80W",
            temperatureRange: "150°C - 450°C",
            tipCompatibility: "Weller ET series",
            weight: "1.5 kg"
        }
    },
    {
        productName: "Digital Multimeter",
        brand: "Fluke",
        image: product1,
        price: 7500,
        warranty: 24,
        description: "Versatile digital multimeter for measuring voltage, current, resistance, and continuity.",
        features: ["Auto-ranging", "Backlit display", "CAT IV safety rated"],
        specifications: {
            displayCount: "6000",
            accuracy: "±0.5%",
            voltageRange: "0.1 mV to 1000V",
            currentRange: "0.1 µA to 10A",
            weight: "0.6 kg"
        }
    },
    {
        productName: "Precision Screwdriver Set",
        brand: "Wiha",
        image: product1,
        price: 1200,
        warranty: 12,
        description: "High-quality precision screwdriver set for electronics repair and maintenance.",
        features: ["Ergonomic handles", "Magnetized tips", "Durable steel construction"],
        specifications: {
            setPieces: "12",
            material: "Chrome-vanadium steel",
            tipTypes: ["Phillips", "Flathead", "Torx"],
            weight: "0.3 kg"
        }
    },
    {
        productName: "Oscilloscope",
        brand: "Tektronix",
        image: product1,
        price: 25000,
        warranty: 24,
        description: "Advanced oscilloscope with high sampling rate and bandwidth for accurate signal analysis.",
        features: ["Dual-channel", "FFT analysis", "USB connectivity"],
        specifications: {
            bandwidth: "100 MHz",
            samplingRate: "1 GS/s",
            display: "7-inch color LCD",
            weight: "2.5 kg"
        }
    },
    {
        productName: "Power Supply Unit",
        brand: "Mastech",
        image: product1,
        price: 7000,
        warranty: 18,
        description: "Reliable power supply unit for testing and repairing electronic devices.",
        features: ["Adjustable voltage and current", "Overload protection", "LED display"],
        specifications: {
            outputVoltage: "0-30V",
            outputCurrent: "0-5A",
            ripple: "≤1 mV",
            weight: "3.2 kg"
        }
    },
    {
        productName: "Hot Plate",
        brand: "Quick",
        image: product1,
        price: 5000,
        warranty: 12,
        description: "Durable hot plate for preheating circuit boards and other electronics during repair.",
        features: ["Fast heating", "Temperature control", "Compact design"],
        specifications: {
            power: "800W",
            temperatureRange: "50°C - 400°C",
            plateSize: "120x120 mm",
            weight: "1.8 kg"
        }
    },
    {
        productName: "Ultrasonic Cleaner",
        brand: "Crest",
        image: product1,
        price: 8000,
        warranty: 24,
        description: "Efficient ultrasonic cleaner for removing dirt and grime from delicate electronic components.",
        features: ["Digital timer", "Stainless steel tank", "Quiet operation"],
        specifications: {
            tankCapacity: "2L",
            frequency: "40 kHz",
            power: "120W",
            weight: "3.5 kg"
        }
    },
    {
        productName: "Infrared Thermometer",
        brand: "Fluke",
        image: product1,
        price: 3000,
        warranty: 12,
        description: "Accurate infrared thermometer for non-contact temperature measurements.",
        features: ["Laser targeting", "Backlit display", "Wide temperature range"],
        specifications: {
            temperatureRange: "-30°C to 500°C",
            accuracy: "±1.5°C",
            responseTime: "500 ms",
            weight: "0.4 kg"
        }
    },
    {
        productName: "Vacuum Desoldering Tool",
        brand: "Hakko",
        image: product1,
        price: 12000,
        warranty: 24,
        description: "High-efficiency vacuum desoldering tool for removing solder from circuit boards.",
        features: ["Built-in vacuum pump", "Ergonomic grip", "Fast heat recovery"],
        specifications: {
            power: "140W",
            temperatureRange: "160°C - 480°C",
            vacuumPressure: "600 mmHg",
            weight: "1.5 kg"
        }
    },
    {
        productName: "Rework Station",
        brand: "Atten",
        image: product1,
        price: 9000,
        warranty: 12,
        description: "Comprehensive rework station for soldering, desoldering, and hot air applications.",
        features: ["Digital temperature control", "Dual function", "ESD safe"],
        specifications: {
            power: "700W",
            temperatureRange: "100°C - 480°C",
            airFlow: "120 L/min",
            weight: "2.8 kg"
        }
    }
]
