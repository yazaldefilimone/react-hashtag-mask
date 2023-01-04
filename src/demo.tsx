import { FunctionComponent } from 'react';
import { InputMask } from './input-mask';

export const Demo: FunctionComponent = () => {
  return (
    <div>
      <div className="header">
        <h2>React Mask</h2>
        <p>
          Created by
          <a href="https://github.com/yazaldefilimonepinto" target="_blank">
            <img src="https://github.com/yazaldefilimonepinto.png" alt="yazalde filimone photo" /> Yazalde Filimone
          </a>
        </p>
      </div>
      <div>
        <div>
          <h3 className="title">Date (mask: ##/##/#### ##:##):</h3>
          <div className="col-3">
            <InputMask type="number" className="effect-7" mask="##/##/#### ##:##" placeholder="Write here..." />
            <span className="focus-border">
              <i></i>
            </span>
          </div>
        </div>

        <div>
          <h3 className="title">Time (mask: ##:##):</h3>
          <div className="col-3">
            <InputMask type="number" className="effect-7" mask="##:##" placeholder="Write here..." />
            <span className="focus-border">
              <i></i>
            </span>
          </div>
        </div>

        <div>
          <h3 className="title">CPF (mask: ###.###.###-##):</h3>
          <div className="col-3">
            <InputMask type="number" className="effect-7" mask="###.###.###-##" placeholder="Write here..." />
            <span className="focus-border">
              <i></i>
            </span>
          </div>
        </div>

        <div>
          <h3 className="title">Phone DDI (mask: +## (##) #####-####):</h3>
          <div className="col-3">
            <InputMask type="number" className="effect-7" mask="+## (##) #####-####" placeholder="Write here..." />
            <span className="focus-border">
              <i></i>
            </span>
          </div>
        </div>
        <div>
          <h3 className="title">CNPJ (mask: ##.###.###/####-##):</h3>
          <div className="col-3">
            <InputMask type="number" className="effect-7" mask="##.###.###/####-##" placeholder="Write here..." />
            <span className="focus-border">
              <i></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
