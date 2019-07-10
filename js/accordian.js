const panelData = [
    {
      title: "Play Modes",
      content: "The Nintendo Switch Lite is designed and meant to be played in Handheld mode only"
    },
    {
      title: "Are all Nintendo Switch games compatible?",
      content: "Nintendo Switch Lite can play the games in the Nintendo Switch library that support handheld mode. For games that do not support handheld mode, players can wirelessly connect compatible controllers (sold separately) to Nintendo Switch Lite. If using separate Joy-Con controllers, users will need to have a device to recharge them, such as the Joy-Con Charging Grip. To find play mode compatibility information for specific games, please refer to the product packaging or Nintendo eShop."
    },
    {
      title: "Can you use the Nintendo Switch Dock?",
      content: "Not compatible with Nintendo Switch dock. Does not support output to a TV. Therefore, it does not come with a dock, HDMI cable or kickstand."
    },
    {
      title: "What is the battery life?",
      content: "Approximately 3 – 7 hours. The battery life will depend on the games you play. For instance, the battery will last approximately 4 hours for The Legend of Zelda: Breath of the Wild."
    }
  ]
  
  // Remove panel from HTML
  // create new function that will create a panel component exactly as you see it in the HTML
  // give the component functionality when the open or closed button is clicked, the content is toggled on/off
  // create components for each of the items in the above array.
  
  // write a function 
  // use createElement 
  // returns a new DOM element
  
  /*
        <div class="panel">
          <div class="panel-bar">
            <h3>Title of Panel</h3>
            <div class="panel-buttons">
              <button class="panel-btn-open">Open</button>
              <button class="panel-btn-close hide-btn">Close</button>
            </div>
          </div>
          <div class="panel-content">
            Content of panel
          </div>
        </div>
  */
  const accordion = document.querySelector('.accordion')
  
  panelData.forEach(data => {
    console.log('creating panel:', data.title)
    accordion.appendChild(createPanel(data.title, data.content))
  })
  // accordion.appendChild(createPanel('hi rosie', 'best cat award'))
  
  function createPanel(title, content) {
    // define new elements
    const panel = document.createElement('div');
    const panelBar = document.createElement('div');
    const panelTitle = document.createElement('h3');
    const buttonPanel = document.createElement('div');
    const buttonOpen = document.createElement('button');
    const buttonClose = document.createElement('button');
    const panelContent = document.createElement('div');
    
    // Setup structure of elements
    panel.appendChild(panelBar)
    panel.appendChild(panelContent)
    panelBar.appendChild(panelTitle)
    panelBar.appendChild(buttonPanel)
    buttonPanel.appendChild(buttonOpen)
    buttonPanel.appendChild(buttonClose)
    
    // set class names
    panel.classList.add('panel')
    panelBar.classList.add('panel-bar')
    buttonPanel.classList.add('panel-buttons')
    buttonOpen.classList.add('panel-btn-open')
    buttonClose.classList.add('panel-btn-close', 'hide-btn')
    panelContent.classList.add('panel-content')
    
    // set text content
    buttonOpen.textContent = 'Open'
    buttonClose.textContent = 'Close'
    panelContent.textContent = content
    panelTitle.textContent = title
    
    // button events
    // ❌ buttonPanel.querySelectorAll('button').forEach(btn => btn.addEventListener('click', clickHandler))
    // ✅ buttonPanel.addEventListener('click', clickHandler)
    buttonPanel.addEventListener('click', event => {
      console.log('button clicked', event.target)
      // 1. toggle hide-btn on BOTH buttons
      buttonOpen.classList.toggle('hide-btn')
      buttonClose.classList.toggle('hide-btn')
      // 2. Change visibility of the content w/ 'toggle-on'
      panelContent.classList.toggle('toggle-on')
    })
    
    return panel
  }