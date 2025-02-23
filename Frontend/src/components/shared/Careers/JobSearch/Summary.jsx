import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
function Summary() {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="Cate">
            <h2 className="text-xl font-bold">Employment Type</h2>
            <blockquote>Part-Time</blockquote>
          </div>
        </CardContent>
        <CardContent>
          <div className="Cate">
            <h2 className="text-xl font-bold">Job Setup</h2>
            <blockquote>Remote</blockquote>
          </div>
        </CardContent>
        <CardContent>
          <div className="Cate flex flex-col ">
            <h2 className="text-xl font-bold">Job Category</h2>
            <blockquote className="text-sm">Communications</blockquote>
          </div>
        </CardContent>
        <CardContent>
          <div className="Cate">
            <h2 className="text-xl font-bold">Country</h2>
            <blockquote>Canada</blockquote>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex gap-4">
            {/* Links the buttons */}
            <Button
              variant="secondary"
              className="bg-[rgb(0,164,224)] border-black text-white hover:bg-[rgb(0,194,280)] rounded-sm"
            >
              Login
            </Button>
            <Button
              variant="outline"
              className="bg-[#ffde7f] hover:bg-[#d8bc65]  text-black text-bolder"
            >
              Signup
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Summary;
