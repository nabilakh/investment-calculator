export default function UserInput({ handleInput, inputValue }) {
  return (
    <div id="user-input">
      <div>
        <label>initial investment</label>
        <input
          type="number"
          value={inputValue.initial}
          onChange={(e) => handleInput("initial", e.target.value)}
        />
      </div>
      <div>
        <label>annual investment</label>
        <input
          type="number"
          value={inputValue.annual}
          onChange={(e) => handleInput("annual", e.target.value)}
        />
      </div>
      <div>
        <label>expected return</label>
        <input
          type="number"
          value={inputValue.expected}
          onChange={(e) => handleInput("expected", e.target.value)}
        />
      </div>
      <div>
        <label>duration</label>
        <input
          type="number"
          value={inputValue.duration}
          onChange={(e) => handleInput("duration", e.target.value)}
        />
      </div>
    </div>
  );
}
