import IconName from '../../../lib/Icon.enum';
import IconButton from '../../../lib/IconButton';
import './ControlPanel.css';

function ControlPanel() {
  return (
    <>
      <div className='control-panel-container'>
        <div className='panel'>
          <div className='button-pair'>
            <IconButton name={IconName.Edit} onIconClick={() => {}} />
            <IconButton name={IconName.View} onIconClick={() => {}} />
          </div>
          <div className='button-pair'>
            <IconButton name={IconName.Undo} onIconClick={() => {}} />
            <IconButton name={IconName.Redo} onIconClick={() => {}} />
          </div>
          <div>
            <IconButton name={IconName.More} onIconClick={() => {}} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ControlPanel;
