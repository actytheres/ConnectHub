import React from "react";
import { CheckCircle2, Info, Bookmark, X } from "lucide-react";
import { useApp } from "../context/useApp";

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (!toasts || toasts.length === 0) return null;

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast-message ${toast.type}`}>
          {toast.type === "success" && <CheckCircle2 size={18} color="#10b981" />}
          {toast.type === "info" && <Info size={18} color="#0284c7" />}
          {toast.type === "bookmark" && <Bookmark size={18} color="#f35b25" />}

          <span>{toast.message}</span>

          <button
            onClick={() => removeToast(toast.id)}
            style={{ color: "#94a3b8", marginLeft: "auto", padding: "2px" }}
          >
            <X size={15} />
          </button>
        </div>
      ))}
    </div>
  );
}
