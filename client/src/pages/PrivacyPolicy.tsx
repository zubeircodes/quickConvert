import { Link } from "wouter";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="icon" data-testid="button-back-home">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Quick Convert</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="prose prose-sm max-w-none dark:prose-invert">
          <h1>Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: October 5, 2025</p>

          <h2>Introduction</h2>
          <p>
            Welcome to Quick Convert. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you use our unit conversion service.
          </p>

          <h2>Information We Collect</h2>
          
          <h3>Information You Provide</h3>
          <p>
            Our service does not require you to create an account or provide personal information. 
            The conversion values you enter are processed locally in your browser and are not transmitted to our servers.
          </p>

          <h3>Automatically Collected Information</h3>
          <ul>
            <li><strong>Local Storage:</strong> We store your recent conversion history locally in your browser to improve your experience. This data never leaves your device.</li>
            <li><strong>Cookies:</strong> We use cookies for essential website functionality and advertising purposes (see Third-Party Services below).</li>
          </ul>

          <h2>Third-Party Services</h2>

          <h3>Google AdSense</h3>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and web beacons to serve ads based on your prior visits to our website or other websites. 
            You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
          </p>

          <h3>Google Fonts</h3>
          <p>
            We use Google Fonts to enhance the visual presentation of our website. Google Fonts may collect usage data. 
            Please refer to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a> for more information.
          </p>

          <h2>How We Use Your Information</h2>
          <p>The information we collect is used to:</p>
          <ul>
            <li>Provide and maintain our unit conversion service</li>
            <li>Remember your recent conversions for your convenience</li>
            <li>Display relevant advertisements through Google AdSense</li>
            <li>Improve and optimize our website performance</li>
          </ul>

          <h2>Data Storage and Security</h2>
          <p>
            Your conversion history is stored locally in your browser's local storage and is never transmitted to our servers. 
            You can clear this data at any time by clearing your browser's local storage or using your browser's privacy settings.
          </p>

          <h2>Your Rights and Choices</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Clear your local conversion history at any time through your browser settings</li>
            <li>Disable cookies through your browser settings (this may affect website functionality)</li>
            <li>Opt out of personalized advertising through Google Ads Settings</li>
            <li>Use ad-blocking software (though this may affect our ability to provide free services)</li>
          </ul>

          <h2>Children's Privacy</h2>
          <p>
            Our service is available to users of all ages. We do not knowingly collect personal information from children. 
            Since we don't collect personal data through our service, children can safely use our unit converter.
          </p>

          <h2>Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
            and updating the "Last updated" date at the top of this policy.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through our website.
          </p>

          <div className="mt-8 text-center">
            <Link href="/">
              <Button variant="outline" data-testid="button-back-to-converter">
                Back to Converter
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>Fast, accurate unit conversions for everyday use</p>
        </div>
      </footer>
    </div>
  );
}
