import './Footer.css'
import { Tabs } from '@radix-ui/react-tabs'

function Footer({_defaultTab = "tab2"}) {

  return (
    <>
      <div className="footer-container">
        <Tabs.Root className="footer-tabs" defaultValue={_defaultTab}>
          <Tabs.List aria-label="tabs example">
            <Tabs.Trigger value="tab1">References</Tabs.Trigger>
            <Tabs.Trigger value="tab2">Dek 0</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab1">References content</Tabs.Content>
          <Tabs.Content value="tab2">Dek 0 content</Tabs.Content>
        </Tabs.Root>
      </div>
    </>
  )
}

export default Footer
