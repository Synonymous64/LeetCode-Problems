//! Callbacks
const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  document.body.appendChild(script);
  script.onload = () => {
    callback(null, "bootstrap"); //* the callback is the function that will run exactly after the source has been fetched or read
    console.log("src: " + src);
  };
  //! in a case if any error occurs like link is not verified --> it can be handled by the following method

  script.onerror = () => {
    console.log("The error occurs while performing the operation");
    callback(new Error("src got some error"), null);
  };
};
const callback = (error, name) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`your script of ${name} is ready`);
};
//! Example if the link is not valid
// loadScript(
//   "https://cdn.jsdeli.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
//   callback
// );
//* For Valid link
loadScript(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
  (goodMorning = (error, src) => {
    if (error) {
      console.log(error);
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
      (goodMorning = (error, src) => {
        if (error) {
          console.log(error);
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
          (goodMorning = (error, src) => {
            if (error) {
              console.log(error);
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
              (goodMorning = (error, src) => {
                if (error) {
                  console.log(error);
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                  (goodMorning = (error, src) => {
                    if (error) {
                      console.log(error);
                      return;
                    }
                  })
                );
              })
            );
          })
        );
      })
    );
  })
);
