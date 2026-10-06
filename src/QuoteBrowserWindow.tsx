import {useQuoteBrowser} from "./hooks/useQuoteBrowser.ts";
import VndbItem from "./components/VndbItem.tsx";

function QuoteBrowserWindow() {

    const {
        currentQuote,
        fetchNewRandomQuote
    } = useQuoteBrowser();

    return (
        <div className="quote-screen">
            <button onClick={fetchNewRandomQuote}>New Quote</button>
            <div className="quote-container">
                {currentQuote &&
                    <>
                        <div className="quote-item-container">
                            {currentQuote.character &&
                                <VndbItem
                                    name={currentQuote.character.name}
                                    id={currentQuote.character.id}
                                    image={currentQuote.character.image}
                                />
                            }
                            {currentQuote.vn &&
                                <VndbItem
                                    name={currentQuote.vn.title}
                                    id={currentQuote.vn.id}
                                    image={currentQuote.vn.image}
                                />
                            }
                        </div>
                        <p className="quote-display">{currentQuote.quote}</p>
                        {currentQuote.character && <p className="quote-display">—{currentQuote.character.name}</p>}
                    </>
                }
            </div>
        </div>
    )

}

export default QuoteBrowserWindow;