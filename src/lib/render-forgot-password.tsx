import { render } from "@react-email/render";
import ForgotPasswordReactMail from "@/components/forgot-password-template-mail";

function renderForgotPassword() {
  return render(<ForgotPasswordReactMail />);
}

export { renderForgotPassword }