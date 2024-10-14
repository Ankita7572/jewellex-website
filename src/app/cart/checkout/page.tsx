"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Banknote, Wallet } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CheckoutPage() {
  const [useDifferentBillingAddress, setUseDifferentBillingAddress] =
    useState(false);

  return (
    <div className="container mt-36 mx-auto p-4 md:p-6 lg:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Delivery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select>
                <option>India</option>
              </Select>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="First name" />
                <Input placeholder="Last name" />
              </div>
              <Input placeholder="Address" />
              <Input placeholder="Apartment, suite, etc. (optional)" />
              <div className="grid grid-cols-3 gap-4">
                <Input placeholder="City" />
                <Select>
                  <option>State</option>
                </Select>
                <Input placeholder="PIN code" />
              </div>
              <Input placeholder="Phone" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping method</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500">
                Enter your shipping address to view available shipping methods.
              </p>
            </CardContent>
          </Card>
          <RadioGroup>
            <Card>
              <CardHeader>
                <CardTitle>Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-500">
                  All transactions are secure and encrypted.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 p-3 border rounded-md">
                    <RadioGroupItem value="simpl" id="simpl" />
                    <Wallet className="h-5 w-5" />
                    <span>
                      Razorpay Secure (Pay with UPI, Cards, Net Banking, etc.)
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 p-3 border rounded-md">
                    <RadioGroupItem value="cod" id="cod" />
                    <Banknote className="h-5 w-5" />
                    <span>Cash on Delivery (COD)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RadioGroup>
          <RadioGroup
            value={useDifferentBillingAddress ? "different" : "same"}
            onValueChange={(value) =>
              setUseDifferentBillingAddress(value === "different")
            }
          >
            <Card>
              <CardHeader>
                <CardTitle>Billing address</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="same" id="same-address" />
                  <Label htmlFor="same-address">Same as shipping address</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="different" id="different-address" />

                  <Label htmlFor="different-address">
                    Use a different billing address
                  </Label>
                </div>
                {useDifferentBillingAddress && (
                  <div className="space-y-4">
                    <Select>
                      <option>India</option>
                    </Select>
                    <div className="grid grid-cols-2 gap-4">
                      <Input placeholder="First name" />
                      <Input placeholder="Last name" />
                    </div>
                    <Input placeholder="Address" />
                    <Input placeholder="Apartment, suite, etc. (optional)" />
                    <div className="grid grid-cols-3 gap-4">
                      <Input placeholder="City" />
                      <Select>
                        <option>State</option>
                      </Select>
                      <Input placeholder="PIN code" />
                    </div>
                    <Input placeholder="Phone (optional)" />
                  </div>
                )}
              </CardContent>
            </Card>
          </RadioGroup>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 rounded-md overflow-hidden">
                  <Image
                    src="/img/silverChains.jpg"
                    alt="Silver Heart's Paradise Ring"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">
                    Silver Heart&apos;s Paradise Ring
                  </p>
                  <p className="text-sm text-gray-500">Quantity: 1</p>
                </div>
                <span className="font-medium">₹1,499.00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Input placeholder="Enter discount code" />
                <Button>Apply</Button>
              </div>
              <div className="flex justify-between items-center">
                <span>Subtotal</span>
                <span>₹1,499.00</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Shipping</span>
                <span>Enter shipping address</span>
              </div>
              <div className="flex justify-between items-center font-bold">
                <span>Total</span>
                <span>₹1,499.00</span>
              </div>
              <p className="text-sm text-gray-500">Including ₹22.15 in taxes</p>
              <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
                Pay now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
// import { useState } from "react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Select } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { CreditCard, Banknote, Wallet } from "lucide-react";

// export default function CheckoutPage() {
//   const [useDifferentBillingAddress, setUseDifferentBillingAddress] =
//     useState(true);
//   const [paymentMethod, setPaymentMethod] = useState("razorpay");

//   return (
//     <div className="container mx-auto p-4 md:p-6 lg:p-8">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//         <div className="lg:col-span-2 space-y-8">
//           <Card>
//             <CardHeader>
//               <CardTitle>Delivery</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <Select>
//                 <option>India</option>
//               </Select>
//               <div className="grid grid-cols-2 gap-4">
//                 <Input placeholder="First name" />
//                 <Input placeholder="Last name" />
//               </div>
//               <Input placeholder="Address" />
//               <Input placeholder="Apartment, suite, etc. (optional)" />
//               <div className="grid grid-cols-3 gap-4">
//                 <Input placeholder="City" />
//                 <Select>
//                   <option>State</option>
//                 </Select>
//                 <Input placeholder="PIN code" />
//               </div>
//               <Input placeholder="Phone" />
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Payment</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <p className="text-sm text-gray-500">
//                 All transactions are secure and encrypted.
//               </p>
//               <RadioGroup
//                 value={paymentMethod}
//                 onValueChange={setPaymentMethod}
//               >
//                 <div className="space-y-2">
//                   <div
//                     className={`flex items-center justify-between p-3 border rounded-md ${
//                       paymentMethod === "razorpay" ? "border-primary" : ""
//                     }`}
//                   >
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="razorpay" id="razorpay" />
//                       <Label htmlFor="razorpay">
//                         Razorpay Secure (Pay with UPI, Cards, Net Banking, etc.)
//                       </Label>
//                     </div>
//                     <div className="flex space-x-1">
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="UPI"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Visa"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Mastercard"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="RuPay"
//                         width={30}
//                         height={20}
//                       />
//                       <span className="text-sm text-gray-500">+16</span>
//                     </div>
//                   </div>
//                   {paymentMethod === "razorpay" && (
//                     <div className="bg-gray-100 p-4 rounded-md text-center space-y-2">
//                       <div className="border-2 border-dashed border-gray-300 p-4 inline-block">
//                         <Wallet className="h-8 w-8 mx-auto text-gray-400" />
//                       </div>
//                       <p className="text-sm text-gray-600">
//                         After clicking &quot;Pay now&quot;, you will be
//                         redirected to Razorpay Secure (Pay with UPI, Cards, Net
//                         Banking, etc.) to complete your purchase securely.
//                       </p>
//                     </div>
//                   )}
//                   <div className="flex items-center justify-between p-3 border rounded-md">
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="simpl" id="simpl" />
//                       <Label htmlFor="simpl">
//                         Simpl Payments (Pay with UPI, Cards, Pay Later, etc.)
//                       </Label>
//                     </div>
//                     <div className="flex space-x-1">
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Simpl"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="UPI"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Visa"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Mastercard"
//                         width={30}
//                         height={20}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-3 border rounded-md">
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="cards" id="cards" />
//                       <Label htmlFor="cards">Credit Cards, Debit Cards</Label>
//                     </div>
//                     <div className="flex space-x-1">
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Visa"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Mastercard"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="RuPay"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Amex"
//                         width={30}
//                         height={20}
//                       />
//                       <span className="text-sm text-gray-500">+3</span>
//                     </div>
//                   </div>
//                   <div className="flex items-center justify-between p-3 border rounded-md">
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value="cred" id="cred" />
//                       <Label htmlFor="cred">
//                         CRED Pay (Rewards on UPI, Cards, etc.)
//                       </Label>
//                     </div>
//                     <div className="flex space-x-1">
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="UPI"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Visa"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="Mastercard"
//                         width={30}
//                         height={20}
//                       />
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="RuPay"
//                         width={30}
//                         height={20}
//                       />
//                     </div>
//                   </div>
//                   <div className="flex items-center space-x-2 p-3 border rounded-md">
//                     <RadioGroupItem value="cod" id="cod" />
//                     <Label htmlFor="cod">Cash on Delivery (COD)</Label>
//                   </div>
//                 </div>
//               </RadioGroup>
//             </CardContent>
//           </Card>

//           <Card>
//             <CardHeader>
//               <CardTitle>Billing address</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <RadioGroup
//                 value={useDifferentBillingAddress ? "different" : "same"}
//                 onValueChange={(value) =>
//                   setUseDifferentBillingAddress(value === "different")
//                 }
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="same" id="same-address" />
//                   <Label htmlFor="same-address">Same as shipping address</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="different" id="different-address" />
//                   <Label htmlFor="different-address">
//                     Use a different billing address
//                   </Label>
//                 </div>
//               </RadioGroup>
//               {useDifferentBillingAddress && (
//                 <div className="space-y-4">
//                   <Select>
//                     <option>
//                       wreg, ewffew, 382440 Ahmedabad GJ, India (Ankita Sharma)
//                     </option>
//                   </Select>
//                   <Select>
//                     <option>India</option>
//                   </Select>
//                   <div className="grid grid-cols-2 gap-4">
//                     <Input placeholder="First name" defaultValue="Ankita" />
//                     <Input placeholder="Last name" defaultValue="Sharma" />
//                   </div>
//                   <Input placeholder="Address" defaultValue="wreg" />
//                   <Input
//                     placeholder="Apartment, suite, etc. (optional)"
//                     defaultValue="ewffew"
//                   />
//                   <div className="grid grid-cols-3 gap-4">
//                     <Input placeholder="City" defaultValue="Ahmedabad" />
//                     <Select defaultValue="Gujarat">
//                       <option>Gujarat</option>
//                     </Select>
//                     <Input placeholder="PIN code" defaultValue="382440" />
//                   </div>
//                   <div className="relative">
//                     <Input
//                       placeholder="Phone (optional)"
//                       defaultValue="98765 43210"
//                     />
//                     <div className="absolute inset-y-0 right-0 flex items-center pr-3">
//                       <Image
//                         src="/placeholder.svg?height=20&width=30"
//                         alt="India"
//                         width={30}
//                         height={20}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </CardContent>
//           </Card>
//         </div>

//         <div className="lg:col-span-1">
//           <Card>
//             <CardHeader>
//               <CardTitle>Order Summary</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex items-center space-x-4">
//                 <div className="relative w-16 h-16 rounded-md overflow-hidden">
//                   <Image
//                     src="/placeholder.svg?height=64&width=64"
//                     alt="Silver Heart's Paradise Ring"
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="flex-grow">
//                   <p className="font-medium">Silver Heart's Paradise Ring</p>
//                   <p className="text-sm text-gray-500">Quantity: 1</p>
//                 </div>
//                 <span className="font-medium">₹1,499.00</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input placeholder="Enter discount code" />
//                 <Button>Apply</Button>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span>Subtotal</span>
//                 <span>₹1,499.00</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span>Shipping</span>
//                 <span>Enter shipping address</span>
//               </div>
//               <div className="flex justify-between items-center font-bold">
//                 <span>Total</span>
//                 <span>₹1,499.00</span>
//               </div>
//               <p className="text-sm text-gray-500">Including ₹22.15 in taxes</p>
//               <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white">
//                 Pay now
//               </Button>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   );
// }
