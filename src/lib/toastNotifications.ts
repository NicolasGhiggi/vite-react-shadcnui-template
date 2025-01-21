interface ToastOptions {
    message: string;
    type: "success" | "error" | "info" | "warning";
}

export function initToastNotifications(): void {
    // Create the toasts container
    const toastsContainer = document.createElement("div");
    toastsContainer.classList.add("toasts");

    // Create the master toast notification
    const masterToast = document.createElement("div");
    masterToast.classList.add("master-toast-notification", "hide-toast");

    // Create the toast content
    const toastContent = document.createElement("div");
    toastContent.classList.add("toast-content");

    // Create the toast icon
    const toastIcon = document.createElement("div");
    toastIcon.classList.add("toast-icon");
    const iconElement = document.createElement("i");
    iconElement.classList.add("fa-solid");
    toastIcon.appendChild(iconElement);

    // Create the toast message
    const toastMsg = document.createElement("div");
    toastMsg.classList.add("toast-msg");

    // Append icon and message to toast content
    toastContent.appendChild(toastIcon);
    toastContent.appendChild(toastMsg);

    // Create the toast progress
    const toastProgress = document.createElement("div");
    toastProgress.classList.add("toast-progress");
    const toastProgressBar = document.createElement("div");
    toastProgressBar.classList.add("toast-progress-bar");
    toastProgress.appendChild(toastProgressBar);

    // Append toast content and progress to master toast
    masterToast.appendChild(toastContent);
    masterToast.appendChild(toastProgress);

    // Append the master toast and the toasts container to the body
    document.body.appendChild(toastsContainer);
    document.body.appendChild(masterToast);

    // Load Remixicon if not already loaded
    if (!document.querySelector('link[href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"]')) {
        const link = document.createElement("link");
        link.href = "https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }
}

let toastCounter = 1;

export function displayToastNotification({ message, type }: ToastOptions): void {
    const className = "toast-" + toastCounter;
    let newNode: HTMLElement;
    const iconMap = {
        success:    { icon: "ri-check-line",         color: "#27ae60" },
        error:      { icon: "ri-close-large-line",   color: "#c0392b" },
        info:       { icon: "ri-info-i",             color: "#2980b9" },
        warning:    { icon: "ri-error-warning-line", color: "#f39c12" },
    };

    const { icon, color: iconColor } = iconMap[type] || { icon: "ri-checkbox-blank-circle-line", color: "#a3a3a3" };

    const masterToastNotification = document.querySelector(".master-toast-notification");
    if (!masterToastNotification) return;

    newNode = masterToastNotification.cloneNode(true) as HTMLElement;
    newNode.classList.add(className, "toast-notification");
    newNode.classList.remove("master-toast-notification");

    document.querySelector(".toasts")?.appendChild(newNode);

    const msgElement = newNode.querySelector(".toast-msg");
    if (msgElement) msgElement.textContent = message;

    const iconElement = newNode.querySelector(".toast-icon i");
    if (iconElement) iconElement.classList.add(icon);

    const toastIcon = newNode.querySelector(".toast-icon") as HTMLElement;
    if (toastIcon) {
        toastIcon.classList.add("wiggle-me");
        toastIcon.style.backgroundColor = iconColor;
    }

    newNode.classList.remove("hide-toast");
    newNode.classList.add("slide-in-fade-out");

    setTimeout(() => newNode.remove(), 6800);

    toastCounter++;
}
