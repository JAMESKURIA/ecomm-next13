export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {/* <Header /> */}
                {children}
            </body>
        </html>
    );
}
