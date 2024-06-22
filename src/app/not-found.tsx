import Link from "next/link";
import "./globals.css";

export default function NotFound() {
  return (
    <html className="page_404">
      <body className="">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="flex flex-col justify-center col-sm-offset-1 gap-5  text-center h-screen">
              <h1 className="text-center text-5xl font-medium">404</h1>
              <div className="four_zero_four_bg h-[1000px]" />

              <div className="contant_box_404">
                <h3 className="h2">Look like you&apos;re lost</h3>

                <p>the page you are looking for not avaible!</p>

                <Link href="/" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
