export interface IButton {
    backgroundColor: string,
    color: string,
    borderRadius: number,
    width: number,
    height: number,

    changeColor: (color: string) => void;
    changeWidth: (width: number) => void;
    changeHeight: (height: number) => void;
    getColor: () => string
}
