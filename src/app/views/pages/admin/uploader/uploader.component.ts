import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Picture } from '../../shared/picture';

@Component({
	selector: 'rw-uploader',
	templateUrl: './uploader.component.html',
	styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent {

	isHovering: boolean;

	@Input() pictures: Picture[];

	toggleHover(event: boolean) {
		this.isHovering = event;
	}

	onDrop(uploadFiles: FileList) {
		for (let i = 0; i < uploadFiles.length; i++) {
			this.validateAndAddFile(uploadFiles.item(i));
		}
	}

	validateAndAddFile(file: File) {
		if(this.validateFile(file)) {
			this.pictures.push(this.fromFile(file));
		}
	}

	validateFile(file: File): boolean {
		if(file.type.startsWith("image/")) {
			return true;
		}
		return false;
	}

	fromFile(file: File): Picture {
		return {
			title: file.name,
			path: `products/${Date.now()}_${file.name}`, // The storage path
			url: '',
			toDelete: false,
			file
		};
	}

	/**
	 * Remove Deleted Picture from List
	 *
	 * @param picture deleted Picture
	 */
	deletePicture(picture: Picture) {
		const index = this.pictures.indexOf(picture);
		if (index >= 0) {
			//this.pictures.splice(index, 1);
			this.pictures[index].toDelete = true;
		}
	}
}
