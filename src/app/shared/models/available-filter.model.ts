export class AvailableFilterModel {
    availableTypes: Array<AvailableTypeModel> = [];
    availableColors: Array<AvailableColorModel> = [];
    availableSize: Array<AvailableSizeModel> = [];
}

export class AvailableColorModel {
    color: string;
    selected: boolean;
}
export class AvailableTypeModel {
    type: string;
    selected: boolean;
}
export class AvailableSizeModel {
    size: string;
    selected: boolean;
}
