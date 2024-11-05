/** @import { BlockStatement } from 'estree' */
/** @import { AST } from '#compiler' */
/** @import { ComponentContext } from '../types' */

import {
	BLOCK_CLOSE,
	BLOCK_OPEN,
	EMPTY_COMMENT
} from '../../../../../internal/server/hydration.js';
import * as b from '../../../../utils/builders.js';

/**
 * @param {AST.SvelteBoundary} node
 * @param {ComponentContext} context
 */
export function SvelteBoundary(node, context) {
	context.state.template.push(b.literal(BLOCK_OPEN));
	context.state.template.push(/** @type {BlockStatement} */ (context.visit(node.fragment)));
	context.state.template.push(b.literal(BLOCK_CLOSE));
}
