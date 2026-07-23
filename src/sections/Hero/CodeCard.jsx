
export default function CodeCard() {
  return (
    <div className="code-card">

      <div className="code-header">

        <div className="window-buttons">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <span className="file-name">
          PortfolioController.java
        </span>

      </div>

      <pre className="code-content">
{`@RestController
@RequestMapping("/portfolio")
public class PortfolioController {

    @GetMapping("/status")
    public String status() {

        return "Open to Opportunities";
    }
}`}
      </pre>

    </div>
  );
}