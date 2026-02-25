import React, { useEffect, useState, useRef } from "react";
import api from "../api/axiosInstance";
import axios from "axios";

export default function TestPost() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null); // store controller to cancel request

  const sendPost = async () => {
    // Create a new AbortController for each request
    controllerRef.current = new AbortController();
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await api.post(
        "/posts",
        { title: "Sandbox Test", body: "Testing Axios instance", userId: 1 },
        { signal: controllerRef.current.signal },
      );
      setResponse(res.data);
    } catch (err) {
      if (axios.isCancel(err)) {
        setError("Request canceled by user");
      } else {
        setError(err.message);
        console.error("POST request error:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  const cancelRequest = () => {
    if (controllerRef.current) {
      controllerRef.current.abort(); // cancel current request
    }
  };

  return (
    <div className="w-full border border-[#6e8840] rounded-md p-6 bg-[#222810] flex flex-col items-center justify-center gap-4 text-[#c2d878]">
      <h2 className="text-[#edf5a8] font-medium text-lg mb-2">
        Test POST Request
      </h2>

      <div className="flex gap-2">
        <button
          onClick={sendPost}
          className="px-4 py-2 bg-[#96b050]/80 hover:bg-[#96b050] rounded text-[#1b2410] text-sm transition-colors"
        >
          Send Request
        </button>
        <button
          onClick={cancelRequest}
          className="px-4 py-2 bg-red-600/80 hover:bg-red-600 rounded text-white text-sm transition-colors"
        >
          Cancel Request
        </button>
      </div>

      {loading && (
        <span className="text-[#96b050] text-sm animate-pulse">
          Sending request...
        </span>
      )}

      {response && (
        <pre className="text-xs bg-[#1b2410] p-3 rounded w-full overflow-x-auto">
          {JSON.stringify(response, null, 2)}
        </pre>
      )}

      {error && <span className="text-red-500 text-sm">{error}</span>}

      <p className="text-xs mt-2 text-[#a4b562]">
        Check console for full response details.
      </p>
    </div>
  );
}
