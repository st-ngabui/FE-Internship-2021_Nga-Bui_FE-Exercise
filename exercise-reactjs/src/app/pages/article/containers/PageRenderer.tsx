import React from 'react';


const PageRenderer = (PageContent: any) => {
  return (props: any) => {
    const {data} = props;
    return (
      <>
        {!data && <p>Loading ...</p>}
        {data && !Object.keys(data).length && <p>Empty content</p> }
        {data && Object.keys(data).length && <PageContent {...props} />}
      </>
    )
  };
}

export default PageRenderer;
