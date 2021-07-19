import './ImageLink.css';

const ImageLink = ({onInputChange, onButtonSubmit}) => {
    return(
        <div className=''>
            <p className='f3 center'>
                {'This Magic Brain will detect faces in your pictures. Give it a try.'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input type='text' onChange={onInputChange}  className='f4 pa2 w-70 center'/>
                    <button onClick={onButtonSubmit} className='w-30 grow f4 link ph3 pv2 dib black bg-dark-gray'>DETECT</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLink;