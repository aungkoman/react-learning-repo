
var conversation_list = [ ...Array(10).keys() ];

function ConversationListSection() {
    // conversation list
  const conversation_headline_list = conversation_list.map(product =>
      <div key={product} className="conversation-headline">
        {product}
      </div>
  );
  
  return (
    <div>
      {conversation_headline_list}
    </div>
  );
}
export default ConversationListSection;