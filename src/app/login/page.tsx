// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { EyeIcon, EyeOffIcon } from "lucide-react";
// import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";

// export default function AuthWrapper() {
//   return (
//     <GoogleOAuthProvider clientId="926336819864-cd09pnf7hnq7co0h8k3ga5ugm6ih1fnq.apps.googleusercontent.com">
//       <AuthForms />
//     </GoogleOAuthProvider>
//   );
// }

// function AuthForms() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleForm = () => setIsLogin(!isLogin);
//   const togglePasswordVisibility = () => setShowPassword(!showPassword);

//   const handleGoogleLogin = useGoogleLogin({
//     onSuccess: (response) => {
//       console.log("Google login successful:", response);
//     },
//     onError: () => {
//       console.log("Google login failed");
//     }
//   });

//   return (
//     <div className="min-h-screen mt-20 flex items-center justify-center">
//       <div className="p-8 rounded-lg w-full max-w-md">
//         <h2 className="text-2xl font-semibold text-center mb-6">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>
//         <form className="space-y-4">
//           {!isLogin && (
//             <>
//               <div>
//                 <Label htmlFor="firstName">First Name</Label>
//                 <Input id="firstName" type="text" required />
//               </div>
//               <div>
//                 <Label htmlFor="lastName">Last Name</Label>
//                 <Input id="lastName" type="text" required />
//               </div>
//             </>
//           )}
//           <div>
//             <Label htmlFor="email">Email</Label>
//             <Input id="email" type="email" required />
//           </div>
//           <div>
//             <Label htmlFor="password">Password</Label>
//             <div className="relative">
//               <Input
//                 id="password"
//                 type={showPassword ? "text" : "password"}
//                 required
//               />
//               <button
//                 type="button"
//                 onClick={togglePasswordVisibility}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
//               >
//                 {showPassword ? (
//                   <EyeOffIcon className="h-5 w-5" />
//                 ) : (
//                   <EyeIcon className="h-5 w-5" />
//                 )}
//               </button>
//             </div>
//           </div>
//           {isLogin && (
//             <div className="text-right">
//               <a href="#" className="text-sm text-pink-600 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
//           )}
//           <Button
//             type="submit"
//             className="w-full bg-pink-500 hover:bg-pink-600 text-white"
//           >
//             {isLogin ? "Login" : "Create Account"}
//           </Button>
//         </form>
//         <div className="mt-4">
//           <Button
//             onClick={() => handleGoogleLogin()}
//             className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
//           >
//             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
//               <path
//                 fill="#4285F4"
//                 d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//               />
//               <path
//                 fill="#34A853"
//                 d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//               />
//               <path
//                 fill="#FBBC05"
//                 d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//               />
//               <path
//                 fill="#EA4335"
//                 d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//               />
//               <path fill="none" d="M1 1h22v22H1z" />
//             </svg>
//             Continue with Google
//           </Button>
//         </div>
//         <div className="mt-4 text-center text-sm">
//           <span className="text-gray-600">
//             {isLogin ? "Don't have an account? " : "Already have an account? "}
//           </span>
//           <a
//             href="#"
//             onClick={toggleForm}
//             className="text-pink-600 hover:underline"
//           >
//             {isLogin ? "Create a new account" : "Login here"}
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { toast, Toaster } from "sonner";

export default function AuthWrapper() {
  return (
    <GoogleOAuthProvider clientId="926336819864-cd09pnf7hnq7co0h8k3ga5ugm6ih1fnq.apps.googleusercontent.com">
      <AuthForms />
      <Toaster />
    </GoogleOAuthProvider>
  );
}

function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleForm = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("Google login successful:", tokenResponse);

      try {
        const response = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ access_token: tokenResponse.access_token })
        });

        if (response.ok) {
          toast.success("Login Successful", {
            description: "You have been logged in with Google."
          });
          // Redirect or update UI as needed
        } else {
          throw new Error("Failed to authenticate with the server");
        }
      } catch (error) {
        console.error("Error during Google login:", error);
        toast.error("Login Failed", {
          description:
            "There was an error logging in with Google. Please try again."
        });
      }
    },
    onError: (error) => {
      console.error("Google login failed:", error);
      toast.error("Login Failed", {
        description:
          "There was an error logging in with Google. Please try again."
      });
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission for email/password login or signup
    toast(isLogin ? "Login Attempted" : "Sign Up Attempted", {
      description: "This functionality is not implemented in this example."
    });
  };

  return (
    <div className="min-h-screen mt-20 flex items-center justify-center">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" required />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" required />
              </div>
            </>
          )}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5" />
                ) : (
                  <EyeIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          {isLogin && (
            <div className="text-right">
              <a href="#" className="text-sm text-pink-600 hover:underline">
                Forgot password?
              </a>
            </div>
          )}
          <Button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white"
          >
            {isLogin ? "Login" : "Create Account"}
          </Button>
        </form>
        <div className="mt-4">
          <Button
            onClick={() => handleGoogleLogin()}
            className="w-full bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
              <path fill="none" d="M1 1h22v22H1z" />
            </svg>
            Continue with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          <span className="text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <a
            href="#"
            onClick={toggleForm}
            className="text-pink-600 hover:underline"
          >
            {isLogin ? "Create a new account" : "Login here"}
          </a>
        </div>
      </div>
    </div>
  );
}
