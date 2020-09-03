
export const confirmMsg = (confirmMessage?: string, confirmTitle?: string) => {
  return {
    title: confirmMessage || 'Alert!',
    message: confirmTitle || 'are you sure?',
    cancel: true,
    persistent: true
  }
}