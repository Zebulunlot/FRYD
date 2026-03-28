import { Card, CardContent } from "@/components/ui/card";
import { Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <Card className="w-full max-w-lg mx-4 shadow-lg border border-border bg-card text-card-foreground">
        <CardContent className="pt-8 pb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-2">404</h1>

          <h2 className="text-xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleGoHome}
              className="fryd-button inline-flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
