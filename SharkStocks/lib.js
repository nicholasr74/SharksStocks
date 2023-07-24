const Lib = {
    renderCollection: function (collection, template, target){
        let html='';
        let result = document.querySelector(target);
        
        for(let i=0; i<collection.length; i++){
          let rec = collection[i];
          html+= template(rec);
        }
  
        result.innerHTML = html;
    },

    renderItem : function (item, template, target){
      document.querySelector(target).innerHTML = template(item)
    },

    getData: async function (url){
      const response = await fetch(url);
      return response.json();
    },

    sendData: async function(data, url){
        const options = {
          headers: {
        '    Content-Type': 'application/json'
          },
          method:'POST',
          body: JSON.stringify(data)
        };
      
      try{
        const response = await fetch(url, options);
        return response.json();
      }catch(e){
        return {error: e};
      }
        
    },

    serializeForm: function(form) {
    const formData = new FormData();

    for (let i = 0; i < form.elements.length; i++) {
      const element = form.elements[i];

      if (element.nodeName === 'INPUT' && element.type !== 'button' && element.type !== 'submit') {
        if (element.type === 'file') {
          // Handle file inputs separately
          const files = element.files;
          for (let j = 0; j < files.length; j++) {
            formData.append(element.name, files[j]);
          }
        } else if (element.type === 'checkbox' || element.type === 'radio') {
          // Handle checkboxes and radio buttons
          if (element.checked) {
            formData.append(element.name, element.value);
          }
        } else {
          formData.append(element.name, element.value);
        }
      } else if (element.nodeName === 'TEXTAREA') {
        // Handle text areas
        formData.append(element.name, element.value);
      }
    }

    // Return the collected form data as an object
    const dataObject = {};
    for (const pair of formData.entries()) {
      dataObject[pair[0]] = pair[1];
    }
    
    return dataObject;
  }
};