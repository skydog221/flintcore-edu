import { useHandleSignInCallback, LogtoProvider } from "@logto/react";

const config = {
  endpoint: import.meta.env.VITE_LOGTO_ENDPOINT || "",
  appId: import.meta.env.VITE_LOGTO_APP_ID || "",
};

function CallbackContent() {
  const { isLoading } = useHandleSignInCallback(() => {
    // Navigate to root path when finished
    window.location.href = "/";
  });

  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }

  return null;
}

const Callback = () => {
  return (
    <LogtoProvider config={config}>
      <CallbackContent />
    </LogtoProvider>
  );
};

export default Callback;
