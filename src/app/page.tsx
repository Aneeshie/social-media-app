import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../components/mode-toggle";

export default function Home() {
  return (
    <div className="m-4">
      <SignedOut>
        <SignInButton mode='modal'>
          <Button variant="outline">Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    
      <Button variant="secondary">Click Me</Button>
      <ModeToggle />
    </div>          
  );
}
