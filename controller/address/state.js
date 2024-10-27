import { FormattedData } from '../../helper/formattedResponse.js';
import SateService from '../../service/address/state.service.js';

const service = new SateService();
export const create = async (req, res, next) => {
    try {
        const state = await service.createState(req.body);
        res.status(201).json(FormattedData(true, state, 'state created'));
    } catch (error) {
        next(error);
    }
};
export const update = async (req, res, next) => {
    try {
        const state = await service.updateState(req.params.id, req.body);
        res.status(200).json(FormattedData(true, state, 'state updated'));
    } catch (error) {
        next(error);
    }
};
export const addCity = async (req, res, next) => {
    try {
        const { cityId } = req.body;
        const state = await service.addCityInAState(req.params.id, cityId);
        res.status(200).json(FormattedData(true, state, 'state updated'));
    } catch (error) {
        next(error);
    }
};
export const deleteState = async (req, res, next) => {
    try {
        const state = await service.deleteState(req.params.id);
        res.status(200).json(FormattedData(true, state, 'state deleted'));
    } catch (error) {
        next(error);
    }
};
export const getAll = async (req, res, next) => {
    try {
        const states = await service.getAllStates();
        console.log(states.length);
        res.status(200).json(FormattedData(true, states, 'states fetched'));
    } catch (error) {
        next(error);
    }
};
export const getById = async (req, res, next) => {
    try {
        const state = await service.getStateById(req.params.id);
        res.status(200).json(FormattedData(true, state, 'state fetched'));
    } catch (error) {
        next(error);
    }
};
