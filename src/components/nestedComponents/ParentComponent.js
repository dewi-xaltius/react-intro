import ChildComponent from './ChildComponent';
import './ParentComponent.css'; // Import CSS file for styling

const ParentComponent = () => {
  return (
    <div className="parent-container">
      <h1>This is the parent component</h1>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
