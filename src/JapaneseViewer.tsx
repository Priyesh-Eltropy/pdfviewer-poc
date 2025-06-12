import React, { FC, useCallback, useState } from "react";
import {
  Worker,
  Viewer,
  CharacterMap,
  LoadError,
} from "@react-pdf-viewer/core";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import { zoomPlugin } from "@react-pdf-viewer/zoom";

import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/page-navigation/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import "./viewer.css";

const CHARACTER_MAP: CharacterMap = { url: "/cmaps/", isCompressed: true };
const PDFJS_WORKER_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.0.279/pdf.worker.min.js";

type Props = { file?: string };

export const JapaneseViewer: FC<Props> = ({ file = "/samples/1.pdf" }) => {
  const navigationPluginInstance = pageNavigationPlugin();
  const zoomPluginInstance = zoomPlugin();

  const { GoToPreviousPage, GoToNextPage, CurrentPageInput, NumberOfPages } =
    navigationPluginInstance;
  const { ZoomOutButton, CurrentScale, ZoomInButton } = zoomPluginInstance;

  const [hasLoadError, setHasLoadError] = useState(false);

  const renderLoadError = useCallback((_error: LoadError) => {
    setHasLoadError(true);
    return <div className="pdf-error">Oops! Invalid PDF file.</div>;
  }, []);

  const handleDocumentLoaded = () => setHasLoadError(false);

  return (
    <div className="viewer-root">
      {hasLoadError ? (
        <div className="viewer-toolbar">
          <span style={{ marginInlineStart: 6 }}>0 / 0</span>
        </div>
      ) : (
        <div className="viewer-toolbar">
          <GoToPreviousPage>
            {({ onClick, isDisabled }) => (
              <button className="btn" onClick={onClick} disabled={isDisabled}>
                ◀
              </button>
            )}
          </GoToPreviousPage>

          <CurrentPageInput />

          <NumberOfPages>
            {({ numberOfPages }) => <span>/ {numberOfPages}</span>}
          </NumberOfPages>

          <GoToNextPage>
            {({ onClick, isDisabled }) => (
              <button className="btn" onClick={onClick} disabled={isDisabled}>
                ▶
              </button>
            )}
          </GoToNextPage>

          <div className="spacer" />

          <ZoomOutButton />
          <CurrentScale />
          <ZoomInButton />
        </div>
      )}

      <Worker workerUrl={PDFJS_WORKER_URL}>
        <Viewer
          key={file}
          fileUrl={file}
          characterMap={CHARACTER_MAP}
          plugins={[navigationPluginInstance, zoomPluginInstance]}
          onDocumentLoad={handleDocumentLoaded}
          renderError={renderLoadError}
        />
      </Worker>
    </div>
  );
};
