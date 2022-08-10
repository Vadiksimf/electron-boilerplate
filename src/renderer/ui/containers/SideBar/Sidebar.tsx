import { useRef } from 'react';
import { Link } from '@mui/material';

import { readXmlFile, writeXmlFile } from 'renderer/store/files/reducer';
import { useAppDispatch, useAppSelector } from 'renderer/store/hooks';
import { routes } from 'renderer/Router/Routes';
import Button from '../../components/StyledButton';
import NavLink from '../../components/NavLink';
import StyledSidebar from './SideBar.style';

const SideBar = () => {
  const dispatch = useAppDispatch();
  const xmlData = useAppSelector((state) => state.files.xml);
  const loadFileInput = useRef<HTMLInputElement>(null);

  const handleLoadClick = () => {
    loadFileInput?.current?.click();
  };

  const onLoadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files;
    let path;
    if (files && files.length) path = files[0].path;
    if (path) dispatch(readXmlFile(path));
  };

  const handleSaveClick = async () => {
    const { filePath } = await window.electron.filesController.openSaveDialog();
    if (filePath && xmlData?.data)
      dispatch(
        writeXmlFile({
          dataObject: xmlData.data,
          filePath: `${filePath}.xml`,
        })
      );
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <StyledSidebar>
      <div className="nav-menu">
        {routes.map((page) => {
          const { key, enabled } = page;
          if (enabled || key === 'link') {
            return (
              <Link
                className="nav-link"
                key={page.key}
                component={NavLink}
                to={page.path}
                color="black"
                underline="none"
                variant="button"
              >
                {page.title}
              </Link>
            );
          }
          return (
            <Button className="nav-link-disabled" key={page.key} disabled>
              {page.title}
            </Button>
          );
        })}
      </div>
      <div>
        <Button className="button-file__load" onClick={handleLoadClick}>
          LOAD XML
        </Button>
        <input
          hidden
          type="file"
          ref={loadFileInput}
          accept="application/xml"
          onChange={onLoadHandler}
        />

        <Button
          className="button-file__save"
          onClick={() => handleSaveClick()}
          disabled={!xmlData?.data}
        >
          SAVE XML
        </Button>
      </div>
    </StyledSidebar>
  );
};

export default SideBar;
