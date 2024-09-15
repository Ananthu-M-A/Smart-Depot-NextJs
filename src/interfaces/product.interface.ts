import { StaticImageData } from "next/legacy/image";

interface ISpec extends Document {
    power?: string;
    temperatureRange?: string;
    airFlow?: string;
    weight?: string;
    tipCompatibility?: string;
    displayCount?: string;
    accuracy?: string;
    voltageRange?: string;
    currentRange?: string;
    setPieces?: string;
    material?: string;
    tipTypes?: string[];
    bandwidth?: string;
    samplingRate?: string;
    display?: string;
    outputVoltage?: string;
    outputCurrent?: string;
    ripple?: string;
    plateSize?: string;
    tankCapacity?: string;
    frequency?: string;
    vacuumPressure?: string;
    responseTime?: string;
}

interface IProduct extends Document {
    productName: string;
    brand: string;
    image: StaticImageData;
    price: number;
    warranty: number;
    description: string;
    features: string[];
    specifications: ISpec;
}

export default IProduct;