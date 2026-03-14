// 10002 - Recognize Node Type

export function recognizeNodeType(node) {
    switch (node.nodeType) {
        case 1: return 'ELEMENT_NODE';
        case 2: return 'ATTRIBUTE_NODE';
        case 3: return 'TEXT_NODE';
        case 8: return 'COMMENT_NODE';
        case 9: return 'DOCUMENT_NODE';
    }
}
