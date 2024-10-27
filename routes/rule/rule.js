import express from 'express';

import { CONFIG } from '../../config/config.js';
import authorize from '../../middleware/authorization.middleware.js';
import { createServiceValidation, updateServiceValidation } from '../../validation/validation/service.validation.js';
import { addServiceToRule, addStepToRule, create, deleteRule, getAllRules, getRuleById, removeServiceFromRule, update } from '../../controller/rules/rule.js';
import { createRuleValidation, updateRuleValidation } from '../../validation/validation/rule.validation.js';
const router = express.Router();

router.get('/', getAllRules);
router.get('/:id', getRuleById);

//authorized
const role = CONFIG.SUPER_ADMIN_ROLE;
router.use(authorize([role]));
router.post('/', createRuleValidation, create);
router.post('/service/:id', addServiceToRule);
router.post('/step/:id', addStepToRule);
router.patch('/:id', updateRuleValidation, update);
router.delete('/service/:id', removeServiceFromRule);
router.delete('/:id', deleteRule);

export { router as ruleRouter };
