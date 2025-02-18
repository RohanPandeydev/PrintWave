import { useEffect } from "react";

const useConfirmOnReload = () => {
    useEffect(() => {
        const handleBeforeUnload = (event) => {
            event.preventDefault();
            event.returnValue = ""; // Standard way to show confirmation dialog
        };

        const handleManualReload = (event) => {
            if (
                (event.ctrlKey && event.key === "r") || // Ctrl+R (Windows/Linux)
                (event.metaKey && event.key === "r") || // Cmd+R (Mac)
                event.key === "F5" // F5
            ) {
                event.preventDefault();
                const userConfirmed = window.confirm("Are you sure you want to reload?");
                if (userConfirmed) {
                    window.location.reload();
                }
            }
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                const userConfirmed = window.confirm("Are you sure you want to leave this page?");
                if (!userConfirmed) {
                    window.history.pushState(null, "", window.location.href);
                }
            }
        };

        // Prevent accidental reload
        window.addEventListener("beforeunload", handleBeforeUnload);

        // Handle refresh via keyboard shortcuts
        window.addEventListener("keydown", handleManualReload);

        // Handle mobile browser reloads or tab switches
        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
            window.removeEventListener("keydown", handleManualReload);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
};

export default useConfirmOnReload;
