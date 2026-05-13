import { useRouteError, Link, isRouteErrorResponse } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
	const error = useRouteError();
	const is404 = !error || (isRouteErrorResponse(error) && error.status === 404);

	const title = is404 ? "404" : (error?.status ?? "Error");
	const heading = is404 ? "Page Not Found" : "Something Went Wrong";
	const message = is404
		? "The page you're looking for doesn't exist or has been moved."
		: error?.statusText || error?.message || "An unexpected error occurred.";

	return (
		<div className="error-page">
			<div className="error-glow" />

			<div className="error-card">
				<div className="error-code">{title}</div>
				<h1 className="error-heading">{heading}</h1>
				<p className="error-message">{message}</p>

				<div className="error-actions">
					<Link to="/" className="error-btn-primary">
						Go Home
					</Link>
					<button
						className="error-btn-secondary"
						onClick={() => window.history.back()}>
						Go Back
					</button>
				</div>
			</div>
		</div>
	);
}
