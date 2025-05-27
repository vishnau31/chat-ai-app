const dummySuggestions = [
  { id: 1, text: "What's the meaning of life?" },
  { id: 2, text: "How do you define love?" },
  { id: 3, text: "What's meaning of AI" },
]

export default function Suggestions() {
    return (
        <div className="flex py-2 flex-col justify-items-stretch">
            <div className="flex gap-2">
                {dummySuggestions.map((suggestion) => (
                    <div
                        key={suggestion.id}
                        className="h-15 p-4  bg-gray-100 rounded-lg text-gray-500 hover:bg-gray-200 hover:text-gray-900 shadow-sm"
                    >
                        {suggestion.text}
                    </div>
                ))}
            </div>
        </div>
    );
}