((document) => {
  const config = {
    kitId: "fcg5qzu",
    scriptTimeout: 3000,
    async: true,
  };

  const htmlElement = document.documentElement;
  const scriptElement = document.createElement("script");
  let timeout;

  const clearLoadingClass = () => {
    htmlElement.className =
      htmlElement.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  };
  timeout = setTimeout(clearLoadingClass, config.scriptTimeout);

  htmlElement.className += " wf-loading";

  scriptElement.src = `https://use.typekit.net/${config.kitId}.js`;
  scriptElement.async = true;

  scriptElement.onload = scriptElement.onreadystatechange = function () {
    const readyState = this.readyState;
    if (readyState && readyState !== "complete" && readyState !== "loaded")
      return;

    clearTimeout(timeout);

    try {
      Typekit.load(config);
    } catch (e) {
      console.error("Error loading Typekit:", e);
    }
  };

  const firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(scriptElement, firstScript);
})(document);
