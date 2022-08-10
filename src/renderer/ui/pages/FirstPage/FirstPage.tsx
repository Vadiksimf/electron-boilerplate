/* eslint-disable no-console */
import { useEffect, useRef } from 'react';

import { useAppSelector } from 'renderer/store/hooks';
import StyledFirstPage from './FirstPage.style';

const FirstPage = () => {
  const log = useAppSelector((state) => state.logs.logs);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [log]);

  useEffect(() => {
    console.log('check connection');
    window.electron.ipcRenderer.sendMessage('ipc-channel', ['ping']);
  }, []);
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <StyledFirstPage>
      <h1 className="title">FirstPage</h1>
      <div>
        <div className="log">
          <h2 className="log__title">Log</h2>
          <div className="log__content">
            <ul className="log__list">
              {log &&
                log.length > 0 &&
                log.map((item, i) => {
                  return (
                    <li
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      className={`log__list__item ${
                        item.status === 'ERROR' ? 'log__list__item__error' : ''
                      }`}
                    >
                      {item.message} {item.status}
                    </li>
                  );
                })}
              <div ref={messagesEndRef} />
            </ul>
          </div>
        </div>
      </div>
    </StyledFirstPage>
  );
};

export default FirstPage;
