import "./Checkbox.css"

export default function Checkbox(props) {
    const toggle = () => {
        if(props.onToggle) {
            props.onToggle(props.label, !props.isChecked)
        }
    }

    return (
        <div className="check-box">
            <label>
            <input type="checkbox"
                   value={props.label}
                   checked={props.isChecked}
                    onChange={toggle} />
            {props.label}
            </label>
        </div>
    )
}