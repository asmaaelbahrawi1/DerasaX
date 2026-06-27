import "./QuickActions.css";
import {
  FileText,
  UserRound,
  RefreshCcw,
  MessageCircle,
} from "lucide-react";

const QuickActions = () => {
  return (
    <section className="quick-section">

      <h2>Quick actions</h2>

      <div className="quick-buttons">

        <button>

          <FileText size={18}/>

          Request document

        </button>

        <button>

          <UserRound size={18}/>

          Contact teacher

        </button>

        <button>

          <RefreshCcw size={18}/>

          View progress

        </button>

        <button>

          <MessageCircle size={18}/>

          Messages

        </button>

      </div>

    </section>
  );
};

export default QuickActions;