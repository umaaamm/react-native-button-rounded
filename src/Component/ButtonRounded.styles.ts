import type { Styles } from "./ButtonRounded.types";

const styles: Styles = {
    containerButton: (width = 100, height = 50) => ({
        padding: 12,
        alignItems: "center",
        borderRadius: 12,
        height: height,
        width: width,
        justifyContent: "center",
    }),
    text: { color: "white" }
};

export default styles;