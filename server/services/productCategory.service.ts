import { NotFoundError } from '@server/core/error.response';
import ProductCategoryModel from '@server/models/productCategory.model';
import {
  createProductCategoryValidator,
  updateProductCategoryValidator,
} from '@server/validators/productCategory.validator';
import { Types } from 'mongoose';
import { z } from 'zod';

export default class ProductCategoryService {
  static async findAll() {
    const newProductCategory = await ProductCategoryModel.find();
    return newProductCategory;
  }

  static async findById(id: Types.ObjectId) {
    const newProductCategory = await ProductCategoryModel.findById(id).lean();
    return newProductCategory;
  }

  static async create(body: z.infer<typeof createProductCategoryValidator.shape.body>, accountId: Types.ObjectId) {
    const newProductCategory = await ProductCategoryModel.create({ ...body, account: accountId });
    return newProductCategory;
  }

  static async update(id: Types.ObjectId, body: z.infer<typeof updateProductCategoryValidator.shape.body>) {
    const categoryUpdated = await ProductCategoryModel.findOneAndUpdate({ _id: id }, { ...body }, { new: true }).lean();
    if (!categoryUpdated) throw new NotFoundError('Category not found');
    return categoryUpdated;
  }

  static async delete(id: Types.ObjectId) {
    const categoryUpdated = await ProductCategoryModel.findByIdAndRemove(id);
    if (!categoryUpdated) throw new NotFoundError('Category not found');
    return { categoryId: categoryUpdated._id };
  }
}
