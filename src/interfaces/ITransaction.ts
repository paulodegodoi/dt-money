import {EHighlightType} from "../enums/EHighlightType";

export interface ITransaction {
	id: number
	description: string
	type: EHighlightType
	price: number
	category: string
	createdAt: string
}