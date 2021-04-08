import { useState } from "react";

export function useEditor() {
    const [editor, setEditor] = useState(null);

    return {
        editor,
        setEditor
    }
}
