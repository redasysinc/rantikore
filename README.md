# RANTIKORE
# React + ANT desIgn + KOa + REact-router-dom

This template provides a minimal setup to get React working in Vite with a KOA backend, ANT DESIGN UI components, with a custom theme, and zustand for state management. The "main" branch of the repo should be used as the template.

The portal branch should be used for demo purposes. It acts as a proof of concept that UIs can be auto generated with a minimum of configuration and zero coding. Read only pages and Forms to make persistent mutations to data from any source can be achieved via the properties of the TYPE and templated form/UI 
controls which allows to rapid development and more productive teams. 

The portal is as follows:

HOME - a static landing page containing multiple components as well as an embedded (iframe) video from a third party source (youTube).

SEARCH - This is a component which utilizes object.keys to display medical professional data obtained via the backend which consumes a RapidAPI resource which serves medical professional data by NPI number. Data is fetched from the ReST service at RapidAPI, then cached for subsequent retrieval for a brief time. Then it is passed back to the client app where the not only the UI is generated dynamically, but also a typescript interface is logged for retrieval by the developer to aid in model/type creation.

This project is ongoing and will be tracked here. As of 7/6/2024 - I have spend a total of 6 hours on its coding. As you can see, this is RAD at its finest.

TODO: 
- Enable JSON configuration of the display/editable fields on a per entity basis. 
- Enable DB support and bring in an ORM. 
- Generate the editors
- Diversify the data pool with other, non-related types.

Questions or issues: redasys@yahoo.com