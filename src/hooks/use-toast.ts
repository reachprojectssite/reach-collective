interface ToastOptions {
  title: string;
  description?: string;
}

export function useToast() {
  const toast = (options: ToastOptions) => {
    // For now, just console.log the toast message
    console.log('Toast:', options);
    // In a real app, you'd use a toast library like react-hot-toast or react-toastify
  };

  return { toast };
} 